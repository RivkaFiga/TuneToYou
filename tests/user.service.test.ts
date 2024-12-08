import bcrypt from 'bcrypt';
import User from '../models/user.model'; 
import { addUser, getAllUsers, getUserById } from '../services/user.service';

jest.mock('../models/user.model', () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
}));

describe('User Service Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('addUser should hash the password and save the user', async () => {
    const mockUser = { username: 'testuser', password: 'password123' };
    const hashedPassword = 'hashed_password';

    (bcrypt.hash as jest.Mock).mockResolvedValueOnce(hashedPassword);

    const saveMock = jest.fn().mockResolvedValue({ ...mockUser, password: hashedPassword });
    jest.spyOn(User.prototype, 'save').mockImplementation(saveMock);

    const result = await addUser(mockUser);

    expect(bcrypt.hash).toHaveBeenCalledWith(mockUser.password, 10);
    expect(saveMock).toHaveBeenCalled();
    expect(result.password).toBe(hashedPassword);
  });

  test('getAllUsers should return all users', async () => {
    const mockUsers = [
      { username: 'user1', password: 'hashed1' },
      { username: 'user2', password: 'hashed2' },
    ];

    const findMock = jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockUsers),
    });
    jest.spyOn(User, 'find').mockImplementation(findMock);

    const result = await getAllUsers();

    expect(User.find).toHaveBeenCalled();
    expect(findMock().exec).toHaveBeenCalled();
    expect(result).toEqual(mockUsers);
  });

  test('getUserById should return a user by ID', async () => {
    const mockUser = { userId: 1, username: 'user1', password: 'hashed1' };

    const findOneMock = jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockUser),
    });
    jest.spyOn(User, 'findOne').mockImplementation(findOneMock);

    const result = await getUserById(1);

    expect(User.findOne).toHaveBeenCalledWith({ userId: 1 });
    expect(findOneMock().exec).toHaveBeenCalled();
    expect(result).toEqual(mockUser);
  });
});