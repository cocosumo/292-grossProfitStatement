import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Form, FormProvider, useForm} from 'react-hook-form';
import {Stack} from '@mui/material';
import {initialForm} from './form';
import {zodResolver} from '@hookform/resolvers/zod';
import {type TForm, schema} from './schema';
import {Toolbar} from './toolbar/Toolbar';
import {Results} from './results/Results';

export const FormGrossProfitTable = () => {
	const formReturn = useForm<TForm>({
		defaultValues: initialForm,
		resolver: zodResolver(schema),
	});

	return (
		<FormProvider {...formReturn}>
			<ReactQueryDevtools />
			<Form
				noValidate
			>
				<Stack
					spacing={2}
					px={4}
					pt={2}
					pb={4}
				>

					<Toolbar />
					<Results />
				</Stack>

			</Form>
		</FormProvider>
	);
};

