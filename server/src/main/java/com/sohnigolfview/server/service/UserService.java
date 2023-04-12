package com.sohnigolfview.server.service;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.Bill;
import com.sohnigolfview.server.persistence.model.User;

public interface UserService {
    Response getAllUser() throws Exception;

    Response getUserById(User model) throws Exception;

    Response getUserByStatus(User model) throws Exception;

    Response createUser(User model) throws Exception;

    Response updateUser(User model) throws Exception;

    Response changeUserStatus(User model) throws Exception;

    Response login(User model) throws Exception;
}
