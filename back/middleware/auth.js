import jwt from 'jsonwebtoken';
 
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // On enlève l'espace et le Bearer pour récup que le token
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    const userId = decodedToken.userId;
    const userAdmin = decodedToken.userRole;
    req.auth = { token : token, userId : userId, role : userAdmin }; // enrichit la requête du front, est exploitée dans la route delete
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID'; 
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

export default auth

// tout ça ce sont des informations envoyées depuis le front. Mon token = req.headers.authorisation n'existe pas sans le front mais je peux simuler les headers et le body depuis Insomnia