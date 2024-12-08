import jwt from 'jsonwebtoken';

export const authenticateToken = (req: any, res: any, next: any) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) {
      return res.status(403).send('A token is required for authentication');
    }
    try {
      const tokenKey = process.env.TOKEN_KEY || '';
      const tokenNew = token.split(' ')[1];
      const decoded = jwt.verify(tokenNew, tokenKey);
      req.user = decoded;
      next();
    } catch (err) {
      console.error('Token verification failed:', err); 
      return res.status(401).send('Invalid Token');
    }
};

export const checkIsAdmin = (req: any, res: any, next: any) => {
    if (req.user && req.user.isAdmin === true) {
        next();
    } else {
        return res.status(403).send('Access Denied: User is not an admin.');
    }
};