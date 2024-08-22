export const ErrorHandlerMIddleware = (err, _, res, __) => {
    if (err.isError) {
        res.status(400).send({
            name: err.name,
            message:err.message
        });
        return ;
    }

    res.status(500).send({
        name: "Server error",
        message: "Error in server"
    });
}