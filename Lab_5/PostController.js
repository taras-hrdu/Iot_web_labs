import Post from './Post.js';

class PostController{
    async create(req, res){
        try{
            const {name, price, weight, count} = req.body
            const post = await Post.create({name, price, weight, count})
            res.json(post)
        }catch (e){
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try{
            const posts = await Post.find();
            return res.json(posts);
        }catch (e){
            res.status(500).json(e)
        }
    }

    async getOne(req, res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'Id is not exist'})
            }
            const post = await Post.findById(id);
            return res.json(post)
        }catch (e){
            res.status(500).json(e)
        }
    }

    async update(req, res){
        try{
            const post = req.body
            if(!post._id){
                res.status(400).json({message: 'Id is not exist'})
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatedPost);
        }catch (e){
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'Id is not exist'})
            }
            const post = await Post.findByIdAndDelete(id);
            return res.json(post)
        }catch (e){
            res.status(500).json(e)
        }
    }
}

export default new PostController();