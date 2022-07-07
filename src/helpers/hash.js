const {scryptSync, randomBytes,timingSafeEqual} = require('crypto');

function hash(password) {
    const salt = randomBytes(8).toString('hex');
    const hashedPassword =scryptSync(password, salt, 64).toString("hex");
    return `${salt}:${hashedPassword}`;
}
function verifyPassword(password,hashedPassword) {
  const [salt,storedPassword] = hashedPassword.split(':');
  const hashedBuffer = scryptSync(password, salt, 64);
  const storedBuffer=Buffer.from(storedPassword,'hex');
  return timingSafeEqual(hashedBuffer,storedBuffer);
}
module.exports={hash,verifyPassword};