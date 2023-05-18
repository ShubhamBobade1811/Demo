package com.mian.serviceI;

import java.util.List;

import com.mian.model.Cities;
import com.mian.model.States;

public interface DropDownServiceI {

	public States saveStates(States states);

	public List<States> getData();

	public List<Cities> getData(int id);

}
