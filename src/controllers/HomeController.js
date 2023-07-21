class HomeController{

  async index(req, res){
      res.send("API Restful! - API BY GLAUDISTON THE ONLY");
  }

}

module.exports = new HomeController();