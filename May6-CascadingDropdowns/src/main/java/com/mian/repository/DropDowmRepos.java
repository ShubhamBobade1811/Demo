package com.mian.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mian.model.States;


@Repository
public interface DropDowmRepos extends JpaRepository<States, Integer>{

}
