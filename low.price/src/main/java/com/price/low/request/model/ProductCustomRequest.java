/**
 * 
 */
package com.price.low.request.model;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import com.price.low.entity.Department;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @author maurizio.franco@ymail.com
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class ProductCustomRequest {

	private String product_name ;
//		@NotBlank(message = "Name may not be Blank")
//		@Size(max = 50, min =2 )
//		protected String firstname;
//		
//		@NotBlank(message = "Lastname may not be Blank")
//		@Size(max = 50, min =2 )
//		protected String lastname;
//		
//		@NotBlank(message = "Email may not be Blank")
//		@Size(max = 100, min =5 )
//		protected String email;
//		
//		@Min(1)
//		@Max(10000000)
//		protected Long id;
//		
//		@Min(1)
//		@Max(10000000)
//		protected Long userId;
//		
//		@NotBlank(message = "City may not be Blank")
//		@Size(max = 100, min =5)
//		protected String domicileCity;
//		
////		protected String domicileStreetName;
////		protected String domicileHouseNumber;
//		
//		@Size(min=5, max = 300)
//		protected String studyQualification;
//		
//		protected Boolean graduate;
//		
//		protected Boolean highGraduate;
//		
//		protected Boolean stillHighStudy;
//		
//		@NotBlank(message = "Mobile may not be Blank")
//		@Size(max = 20, min =5)
//		protected String mobile;
//		
//		@Size(min = 5 ,max = 100)
//		protected String cvExternalPath;
//		
//		@Past
//		protected Date dateOfBirth;
//		
//		@Size(min =1, max = 255)
//		protected String imgpath;
//		
//		@Size(min =1,  max = 100)
//		protected String courseCode;
//		
//		@Size(min =50, max = 2000)
//		protected String note;
//		
//		@NotEmpty
//		protected Long insertedBy ;
//		
//		private MultipartFile[] files;
		
		

		
		
		



}
