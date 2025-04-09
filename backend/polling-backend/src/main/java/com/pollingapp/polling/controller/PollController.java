package com.pollingapp.polling.controller;

import com.pollingapp.polling.model.Poll;
import com.pollingapp.polling.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polls")
@CrossOrigin(origins = "*")
public class PollController {

    @Autowired
    private PollService pollService;

    @GetMapping
    public List<Poll> getAllPolls() {
        return pollService.getAllPolls();
    }

    @PostMapping
    public Poll createPoll(@RequestBody Poll poll) {
        return pollService.createPoll(poll);
    }

    @PostMapping("/{id}/vote/{option}")
    public Poll vote(@PathVariable Long id, @PathVariable int option) {
        return pollService.vote(id, option);
    }

    @DeleteMapping("/{id}")
    public void deletePoll(@PathVariable Long id) {
        pollService.deletePoll(id);
    }

}
