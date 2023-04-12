//package com.sohnigolfview.server.controller;
//
//import com.sohnigolfview.server.base.response.JwtResponse;
//import com.sohnigolfview.server.service.implementation.BaseServiceImplementation;
//import com.sohnigolfview.server.base.request.JwtRequest;
//import com.sohnigolfview.server.base.response.Response;
//import com.sohnigolfview.server.security.JwtTokenUtil;
//import com.sohnigolfview.server.service.implementation.MyUserDetailsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin
//public class TestSecurityController extends BaseController {
//
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @Autowired
//    private MyUserDetailsService userDetailsService;
//
//
//    @Autowired
//    private JwtTokenUtil jwtTokenUtil;
//
//    @RequestMapping(value = "/authenticate")
//    public Response testSecurity(@RequestBody JwtRequest authenticationRequest) throws Exception {
//        try{
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),authenticationRequest.getPassword())
//            );
//        }catch (BadCredentialsException e){
//            setException(e);
//        }
//        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
//        final String jwt = jwtTokenUtil.generateToken(userDetails);
//        response.setData(new JwtResponse(jwt));
//        setSuccessMsg();
//        return response;
//    }
//
//    @PostMapping(value = "/login")
//    public Response login(@RequestBody User user){
//
//        return response;
//    }
//}
