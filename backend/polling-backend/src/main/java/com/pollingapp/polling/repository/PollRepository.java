package com.pollingapp.polling.repository;

import com.pollingapp.polling.model.Poll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PollRepository extends JpaRepository<Poll, Long> {
}
