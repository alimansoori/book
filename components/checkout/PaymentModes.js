import { Form, Radio } from "semantic-ui-react";
import { getValueByKey } from "../../functions";
import Error from "./Error";

const PaymentModes = ({ input, handleOnChange }) => {
	return (
		<>
			<Form.Field>
				<Radio
					name='paymentMethod'
					label={`انتقال مستقیم بانکی`}
					value="bacs"
					// checked={value === 'bacs'}
					onChange={handleOnChange}
				// error={getValueByKey(input.errors, 'paymentMethod')}
				/>
			</Form.Field>
			<Form.Field>
				<Radio
					name='paymentMethod'
					label={`پرداخت از طربق Paypal`}
					value="paypal"
					// checked={value === 'bacs'}
					onChange={handleOnChange}
				// error={getValueByKey(input.errors, 'paymentMethod')}
				/>
			</Form.Field>
			<Form.Field>
				<Radio
					name='paymentMethod'
					label={`بررسی پرداخت ها`}
					value="cheque"
					// checked={value === 'bacs'}
					onChange={handleOnChange}
				// error={getValueByKey(input.errors, 'paymentMethod')}
				/>
			</Form.Field>
			<Form.Field>
				<Radio
					name='paymentMethod'
					label={`پرداخت درب منزل`}
					value="cod"
					// checked={value === 'bacs'}
					onChange={handleOnChange}
				// error={getValueByKey(input.errors, 'paymentMethod')}
				/>
			</Form.Field>
		</>
	);
};

export default PaymentModes;
