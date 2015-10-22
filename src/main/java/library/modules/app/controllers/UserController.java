package library.modules.app.controllers;

import library.modules.app.dto.UserDTO;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 *
 *  REST service for Users
 *
 */

@Controller
@RequestMapping("/user")
public class UserController {

    private static final Logger LOGGER = Logger.getLogger(UserController.class);


    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value="save", method = RequestMethod.POST)
    public UserDTO getEvent() {

        UserDTO user = new UserDTO();

        user.setTitle("User 1");

        return user;
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value="/delete", method = RequestMethod.DELETE)
    public UserDTO deleteEvent(@RequestParam(value="id", required= false) int id) {

        UserDTO user = new UserDTO();

        user.setId(id);

        return user;
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value="update", method = RequestMethod.GET)
    public UserDTO updateUser(@RequestParam(value="id", required= false) int id) {

        UserDTO user = new UserDTO();

        user.setTitle("User 1");

        return user;
    }



    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> errorHandler(Exception exc) {
        LOGGER.error(exc.getMessage(), exc);
        return new ResponseEntity<>(exc.getMessage(), HttpStatus.BAD_REQUEST);
    }

}
