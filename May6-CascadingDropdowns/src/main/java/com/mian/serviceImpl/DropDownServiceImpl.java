package com.mian.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mian.model.Cities;
import com.mian.model.States;
import com.mian.repository.DropDowmRepos;
import com.mian.serviceI.DropDownServiceI;

@Service
public class DropDownServiceImpl implements DropDownServiceI {
	
	@Autowired
	DropDowmRepos ddr;

	@Override
	public States saveStates(States states) {
		
		States states2 = ddr.save(states);
		
		return states2;
	}

	@Override
	public List<States> getData() {
		List<States> list = ddr.findAll();
		
		return list;
	}

	@Override
	public List<Cities> getData(int id) {
		List<States> findAll = ddr.findAll();
		List<Cities> c=new ArrayList<>();
		findAll.forEach(z ->{
			if(z.getId()==id) {
				c.addAll(z.getCities());
			}
		});
		
		
		return c;
	}

}
