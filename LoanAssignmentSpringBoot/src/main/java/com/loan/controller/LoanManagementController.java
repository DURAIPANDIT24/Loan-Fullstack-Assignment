package com.loan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.loan.model.Customer;
import com.loan.model.Loan;
import com.loan.model.PaymentSchedule;
import com.loan.services.LoanManagementService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class LoanManagementController {
	@Autowired
	LoanManagementService loanManagementService;
	@GetMapping("/customer/{customerId}")
	private Customer getCustomerDetails(@PathVariable("customerId") String customerId) {
		return loanManagementService.getCustomerDetails(customerId);
	}

	
	@GetMapping("/verify-customer")
	private Customer verifyCustomer(@RequestParam("email") String email, @RequestParam("password") String password) {
		return loanManagementService.getCustomerDetails(email, password);
	}
	
	@PostMapping("/add-customer")
	private Customer saveCustomer(@RequestBody Customer customer) {
		return loanManagementService.saveCustomerDetails(customer);
	}
	
	@GetMapping("/loans/{customerId}")
	private List<Loan> getLoans(@PathVariable("customerId") String customerId) {
		return loanManagementService.getLoansByCustomerId(customerId);
	}

	
	@GetMapping("/loan/payment-schedule/{loanId}")
	private List<PaymentSchedule> getPaymentSchedule(@PathVariable("loanId") String loanId) {
		return loanManagementService.getPaymentScheduleByLoanId(loanId);
	}

	@PutMapping("/update-payment/{paymentId}")
	private PaymentSchedule updatePaymentStatus(@PathVariable("paymentId") String paymentId) {
		return loanManagementService.updatePaymentStatus(paymentId);
	}

	
	@PostMapping("/loan")
	private Loan saveLoan(@RequestBody Loan loan) {
		return loanManagementService.saveLoan(loan);
	}

	@PutMapping("/update-loanstatus/{loanId}")
	private Loan approvedLoan(@PathVariable("loanId") String LoanId) {
		return loanManagementService.approvedLoan(LoanId);
	}
}