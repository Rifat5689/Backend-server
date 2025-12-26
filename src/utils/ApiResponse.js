class ApiResponse {
      constructor(statusCode,data,message ="success",success)
      {
          this.statusCode = statusCode ; 
          this.data = data  ; 
          this.success = statusCode  ;
      }
}
export {ApiResponse} 