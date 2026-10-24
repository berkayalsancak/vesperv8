module.exports=(req,res)=>{
  res.setHeader('Content-Type','image/png');
  res.setHeader('Content-Disposition','inline; filename="vesper-1013.png"');
  res.setHeader('Cache-Control','public, max-age=86400, s-maxage=86400');
  res.status(200).send(Buffer.from(require('../lib/img.js'),'base64'));
};
