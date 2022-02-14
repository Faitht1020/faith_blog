 const News = require('../models/news.schema')
 

 
 const newCnt = {
 create: async (req, res) => {
     try{
         //you can use const {title, description, isValid} = req.body
         // const news will now be = new News(req.body)
         // then go straight to } catch (error)
        const news = await new News({  /* or news.create*/
            title: req.body.title,
            description:req.body.description,
            body: req.body.body,
            isValid: req.body.isValid,
         }).save()
         if(!news) throw new error('news not saved properly')
        return res.status(201).send(news)
     } catch (error) {
         res.status(400).send(error.message);
     }
     },
     
     update: async (req, res) => {
         try{
             const postId = req.params.postId;
             const { title, description, body}  = req.body
             if (!title || !description || !body)
             throw new Error('Hello, you are not sending the body data')
             
             const news = await News.findByIdAndUpdate(postId, {
                 title: req.body.title,
                description: req.body.description,
                body: req.body.body,
             });

             if (!news) throw new Error('news not updated properly')
             return res.status(200).send(news);

         } catch(error) {
             res.status(400).send(error.message);

         }
     },
      read: async (req,res) =>{
          try {
              const allNews = await News.find({})
              return res.status(200).send(allNews);
          } catch (error) {
              res.status(400).send(error.message);
          }
      },

      delete: async (req,res) => {
          try {
              const postId = req.params.postId;
              await News.findByIdAndDelete(postId);
              return res.status(200).send('post deleted')
          } catch (error){
              res.status(400).send(error.message);
          }
      },
};

module.exports = newCnt