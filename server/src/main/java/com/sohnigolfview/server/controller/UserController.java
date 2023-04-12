package com.sohnigolfview.server.controller;

import com.sohnigolfview.server.base.Base;
import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Bill;
import com.sohnigolfview.server.persistence.model.User;
import com.sohnigolfview.server.service.BillService;
import com.sohnigolfview.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;

@RestController
@CrossOrigin
public class UserController extends BaseController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/getUsers")
    public Response getUsers() throws Exception {
        return userService.getAllUser();
    }

    @PostMapping(value = "/getUserById")
    public Response getUserById(@RequestBody User user) throws Exception {
        return userService.getUserById(user);
    }

    @PostMapping(value = "/getUsersByStatus")
    public Response getUserByStatus(@RequestBody User user) throws Exception {
        return userService.getUserByStatus(user);
    }

    @PostMapping(value = "/createUser")
    public Response createUser(@RequestBody User user) throws Exception{
        user.setPassword(hashPassword(user.getPassword()));
        return userService.createUser(user);
    }

    @PostMapping(value = "/updateUser")
    public Response updateUser(@RequestBody User user) throws Exception{
        user.setPassword(hashPassword(user.getPassword()));
        return userService.updateUser(user);
    }

    @PostMapping(value = "/changeUserStatus")
    public Response changeUserStatus(@RequestBody User user) throws Exception{
        return userService.changeUserStatus(user);
    }

    @PostMapping(value = "/login")
    public Response login(@RequestBody User user) throws Exception{
        return userService.login(user);
    }
}
