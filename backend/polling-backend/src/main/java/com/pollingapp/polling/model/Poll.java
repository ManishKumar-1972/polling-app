package com.pollingapp.polling.model;

import jakarta.persistence.*;

@Entity
public class Poll {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;

    private String option1;
    private String option2;
    private String option3;
    private String option4;

    private int votes1;
    private int votes2;
    private int votes3;
    private int votes4;

    public Poll() {
    }

    public Poll(Long id, String question, String option1, String option2, String option3, String option4,
                int votes1, int votes2, int votes3, int votes4) {
        this.id = id;
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.votes1 = votes1;
        this.votes2 = votes2;
        this.votes3 = votes3;
        this.votes4 = votes4;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getOption1() {
        return option1;
    }

    public void setOption1(String option1) {
        this.option1 = option1;
    }

    public String getOption2() {
        return option2;
    }

    public void setOption2(String option2) {
        this.option2 = option2;
    }

    public String getOption3() {
        return option3;
    }

    public void setOption3(String option3) {
        this.option3 = option3;
    }

    public String getOption4() {
        return option4;
    }

    public void setOption4(String option4) {
        this.option4 = option4;
    }

    public int getVotes1() {
        return votes1;
    }

    public void setVotes1(int votes1) {
        this.votes1 = votes1;
    }

    public int getVotes2() {
        return votes2;
    }

    public void setVotes2(int votes2) {
        this.votes2 = votes2;
    }

    public int getVotes3() {
        return votes3;
    }

    public void setVotes3(int votes3) {
        this.votes3 = votes3;
    }

    public int getVotes4() {
        return votes4;
    }

    public void setVotes4(int votes4) {
        this.votes4 = votes4;
    }
}
