if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://arshad:Svd98kjx/619*@ds149034.mlab.com:49034/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}