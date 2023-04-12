package com.sohnigolfview.server.service.implementation;

import com.sohnigolfview.server.base.response.Response;
import com.sohnigolfview.server.persistence.model.User;
import com.sohnigolfview.server.persistence.repository.UserRepo;
import com.sohnigolfview.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserServiceImplementation extends BaseServiceImplementation implements UserService {

    @Autowired
    UserRepo userRepo;

    @Override
    public Response getAllUser() throws Exception {
        try{
            List<User> users = userRepo.getAllUsers();
            if (users.size() > 0){
                response.setData(users);
                setSuccessMsg();
            }else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response getUserById(User model) throws Exception {
        try{
            User users = userRepo.getUserById(model.getId());
            if (users != null){
                response.setData(users);
                setSuccessMsg();
            }else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response getUserByStatus(User model) throws Exception {
        try{
            List<User> users = userRepo.getUsersByStatus(model.getStatus());
            if (users.size() > 0){
                response.setData(users);
                setSuccessMsg();
            }else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response createUser(User model) throws Exception {
        try{
//            List<User> users = userRepo.createUser(model.getName(),model.getType(),model.getStatus(),model.getUser_name(),model.getPassword(),model.getId());
            User users = userRepo.save(model);
            if (users != null){
                response.setData(userRepo.findAll());
                setSuccessMsg();
            }else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Transactional
    @Override
    public Response updateUser(User model) throws Exception {
        try{
            User users = entityManager.merge(model);
            if (users != null){
                response.setData(users);
                setSuccessMsg();
            }else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response changeUserStatus(User model) throws Exception {
        try{
            int userStatus = userRepo.changeUserStatus(model.getStatus(), model.getId());
            if (userStatus > 0){
                response.setData(userRepo.getUserById(model.getId()));
                setSuccessMsg();
            }else {
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }

    @Override
    public Response login(User model) throws Exception {
        try{
            List<User> users = userRepo.login(model.getUser_name(), model.getPassword());
            if (users.size() > 0){
                response.setData(users);
                setSuccessMsg();
            }else{
                setErrorMsg();
            }
        }catch (Exception exception){
            setException(exception);
        }
        return response;
    }
}
