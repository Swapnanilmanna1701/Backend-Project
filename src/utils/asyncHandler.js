const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  }
};
export {asyncHandler}; //export default asyncHandler;























// this is a wrapper using try and catch for async await codebase

/*


const asyncHandler = (fn)=> async(req, res, next) => {
    try {
        await fn(req, res, next);
        
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
        
    }

}
;
*/
