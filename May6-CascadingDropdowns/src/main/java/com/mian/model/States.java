package com.mian.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "states")
public class States {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String states;
	
	@OneToMany(cascade = CascadeType.ALL )
	private List<Cities>  cities = new ArrayList<Cities>();
	
	

}
