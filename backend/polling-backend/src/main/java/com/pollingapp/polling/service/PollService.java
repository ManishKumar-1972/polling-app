package com.pollingapp.polling.service;

import com.pollingapp.polling.model.Poll;
import com.pollingapp.polling.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollService {

    @Autowired
    private PollRepository pollRepository;

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);
    }

    public Poll vote(Long id, int option) {
        Poll poll = pollRepository.findById(id).orElseThrow();
        switch (option) {
            case 1 -> poll.setVotes1(poll.getVotes1() + 1);
            case 2 -> poll.setVotes2(poll.getVotes2() + 1);
            case 3 -> poll.setVotes3(poll.getVotes3() + 1);
            case 4 -> poll.setVotes4(poll.getVotes4() + 1);
        }
        return pollRepository.save(poll);
    }

    public void deletePoll(Long id) {
        pollRepository.deleteById(id);
    }

}
