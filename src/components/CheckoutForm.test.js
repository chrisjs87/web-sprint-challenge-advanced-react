import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	render(<CheckoutForm/>)

	const formHeader = screen.queryByText(/checkout form/i)

	expect(formHeader).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
	render(<CheckoutForm/>)

	const fNameInput = screen.getByLabelText(/first name/i)
	const lNameInput = screen.getByLabelText(/last name/i)
	const addressInput = screen.getByLabelText(/address/i)
	const cityInput = screen.getByLabelText(/city/i)
	const stateInput = screen.getByLabelText(/state/i)
	const zipInput = screen.getByLabelText(/zip/i)

	const button = screen.getByRole("button")

	userEvent.type(fNameInput, 'Firstname')
	userEvent.type(lNameInput, 'Lastname')
	userEvent.type(addressInput, 'ThisIsAnAddress')
	userEvent.type(cityInput, 'ThisIsACity')
	userEvent.type(stateInput, 'ThisIsAState')
	userEvent.type(zipInput, '99999')

	userEvent.click(button)

	//await waitFor(()=> {
		const successMessage = screen.getByTestId("successMessage")
		expect(successMessage).toBeInTheDocument()
	//});
});
