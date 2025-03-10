package com.sneakpeak.bricool.exception;


import com.sneakpeak.bricool.response.ResponseHandler;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<Object> handleNotFoundException(NotFoundException ex) {
        return ResponseHandler.errorBuilder(
                ex.getMessage(),
                HttpStatus.NOT_FOUND
        );
    }
//
//    @ExceptionHandler(NotEligibleException.class)
//    public ResponseEntity<Object> handleNotEligibleException(NotEligibleException ex) {
//        return ResponseHandler.errorBuilder(
//                ex.getMessage(),
//                HttpStatus.FORBIDDEN,
//                "403"
//        );
//    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleGenericException(Exception ex) {
        String fullMessage = ex.getMessage();
        String extractedMsg = fullMessage.split("\\[insert into")[0].trim();
        String msg = extractedMsg.substring(extractedMsg.indexOf("Détail") + 17, extractedMsg.length() - 1);
        return ResponseHandler.errorBuilder(
                msg,
                HttpStatus.FORBIDDEN
        );
    }
}
