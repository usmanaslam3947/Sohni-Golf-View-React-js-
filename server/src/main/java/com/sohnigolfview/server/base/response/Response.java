package com.sohnigolfview.server.base.response;

public class Response<R> {
    private R data;
    private Message message = new Message();

    public R getData() {
        return data;
    }

    public void setData(R data) {
        this.data = data;
    }

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }
}
