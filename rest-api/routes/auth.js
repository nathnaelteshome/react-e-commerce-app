export const GET = async (request, {params}) =>{
    try{
        await connectToDB()

        const prompt = await Prompt.findById(params.id)
        if(!prompt) return new Response("Prompt Not Found", )


    }catch{

    }

}