import React from 'react';
import { Form, Select } from 'semantic-ui-react';
import { getValueByKey } from '../../functions';
import countryList from './country-list';
import Error from "./Error";

const Billing = ({ input, handleOnChange }) => {
	const genderCountryOptions = [
		{ key: 'm', text: 'ایران', value: 'iran' },
		{ key: 'f', text: 'انگلستان', value: 'england' },
		{ key: 'o', text: 'آمریکا', value: 'us' },
	  ]

	return (
		<React.Fragment>
			<Form.Group widths='equal'>
				<Form.Input
					required
					fluid label='نام'
					placeholder='نام'
					type='text'
					name='firstName'
					error={getValueByKey(input.errors, 'firstName')}
					value={input.fieldName}
					onChange={handleOnChange}
				/>
				<Form.Input
					required
					fluid label='نام خانوادگی'
					placeholder='نام خانوادگی'
					type='text'
					name='lastName'
					error={getValueByKey(input.errors, 'lastName')}
					value={input.lastName}
					onChange={handleOnChange}
				/>
			</Form.Group>
			
			<Form.Group widths='equal'>
				<Form.Field
					control={Select}
					options={countryList}
					label={{ children: 'Country', htmlFor: 'form-select-control-country' }}
					placeholder='کشور خود را انتخاب کنید'
					search
					required
					name='country'
					error={getValueByKey(input.errors, 'country')}
					searchInput={{ id: 'form-select-control-country' }}
				/>
				<Form.Input
					fluid label='استان'
					placeholder='استان'
					type='text'
					name='state'
					error={getValueByKey(input.errors, 'state')}
					value={input.state}
					onChange={handleOnChange}
					required
				/>
				<Form.Input
					fluid label='شهر'
					placeholder='شهر'
					type='text'
					name='city'
					error={getValueByKey(input.errors, 'city')}
					value={input.city}
					onChange={handleOnChange}
					required
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					fluid label='آدرس'
					placeholder='آدرس ...'
					type='text'
					name='address1'
					error={getValueByKey(input.errors, 'address1')}
					value={input.address1}
					onChange={handleOnChange}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					fluid label='کدپستی'
					placeholder='کدپستی'
					type='text'
					name='postcode'
					error={getValueByKey(input.errors, 'postcode')}
					value={input.postcode}
					onChange={handleOnChange}
				/>
				<Form.Input
					fluid label='تلفن'
					placeholder='تلفن'
					type='text'
					name='phone'
					error={getValueByKey(input.errors, 'phone')}
					value={input.phone}
					required
					onChange={handleOnChange}
				/>
				<Form.Input
					fluid label='ایمیل'
					placeholder='ایمیل'
					type='text'
					name='email'
					error={getValueByKey(input.errors, 'email')}
					value={input.email}
					required
					onChange={handleOnChange}
				/>
			</Form.Group>
			{/* Street Address */}
			{/* <div className="form-group">
				<label htmlFor="street-address">
					Street Address
					<abbr className="required" title="required">*</abbr>
				</label>
				<input type="text" onChange={handleOnChange} value={input.address1} name="address1" placeholder="House number and street name" className="form-control book-checkout-input" id="street-address" />
				<Error errors={input.errors} fieldName={'address1'} />
				<br />
				<input type="text" onChange={handleOnChange} value={input.address2} name="address2" placeholder="Apartment, suite, unit etc.(optional)" className="form-control book-checkout-input" id="first-name" />
			</div> */}
			{/* Town/City */}
			{/* <div className="form-group">
				<label htmlFor="city">
					Town/City
					<abbr className="required" title="required">*</abbr>
				</label>
				<input onChange={handleOnChange} value={input.city} type="text" name="city" className="form-control book-checkout-input" id="city" />
				<Error errors={input.errors} fieldName={'city'} />
			</div> */}
			{/* County */}
			{/* Post Code */}
			{/* <div className="form-group">
				<label htmlFor="post-code">
					Postcode
					<abbr className="required" title="required">*</abbr>
				</label>
				<input onChange={handleOnChange} value={input.postcode} type="text" name="postcode" className="form-control book-checkout-input" id="post-code" />
				<Error errors={input.errors} fieldName={'postcode'} />
			</div> */}
			{/*Phone & Email*/}
			{/* <div className="row">
				<div className="col-lg-6 col-md-12 p-0 pr-2">
					<div className="form-group">
						<label htmlFor="phone">
							Phone
							<abbr className="required" title="required">*</abbr>
						</label>
						<input onChange={handleOnChange} value={input.phone} type="text" name="phone" className="form-control book-checkout-input" id="phone" />
						<Error errors={input.errors} fieldName={'phone'} />
					</div>
				</div>
				<div className="col-lg-6 col-sm-12 p-0">
					<div className="form-group">
						<label htmlFor="email">
							Email
							<abbr className="required" title="required">*</abbr>
						</label>
						<input onChange={handleOnChange} value={input.email} type="email" name="email" className="form-control book-checkout-input" id="email" />
						<Error errors={input.errors} fieldName={'email'} />
					</div>
				</div>
			</div> */}
			{/*	@TODO Create an Account */}
			{/*<div className="form-check">*/}
			{/*	<label className="form-check-label">*/}
			{/*		<input onChange={ handleOnChange } className="form-check-input" name="createAccount" type="checkbox"/>*/}
			{/*			Create an account?*/}
			{/*	</label>*/}
			{/*</div>*/}
			{/*<h2 className="mt-4 mb-4">Additional Information</h2>*/}
			{/* @TODO Order Notes */}
			{/*<div className="form-group">*/}
			{/*	<label htmlFor="order-notes">Order Notes</label>*/}
			{/*	<textarea onChange={ handleOnChange } defaultValue={ input.orderNotes } name="orderNotes" className="form-control book-checkout-textarea" id="order-notes" rows="4"/>*/}
			{/*	<Error errors={ input.errors } fieldName={ 'orderNotes' }/>*/}
			{/*</div>*/}
		</React.Fragment>
	);
};

export default Billing;
