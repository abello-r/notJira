import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface User {
	id: number;
	firstName: string;
	lastName: string;
	team: string;
	role: string;
	onDoingProjects: number;
	completedProjects: number;
}

interface DataTableProps {
	users?: User[];
	translations: {
		[key: string]: string;
	};
}

export default function DataTable({ users, translations }: DataTableProps) {
	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'firstName', headerName: translations.FirstName, width: 130 },
		{ field: 'lastName', headerName: translations.LastName, width: 130 },
		{ field: 'team', headerName: translations.Team, width: 150 },
		{ field: 'role', headerName: translations.Role, width: 160 },
		{ field: 'onDoingProjects', headerName: translations.OnProjects, type: 'number', width: 140, align: 'center' },
		{ field: 'completedProjects', headerName: translations.EndProjects, type: 'number', width: 160, align: 'center' }
	];
	return (
		<div className='h-full w-full'>
			<DataGrid
				sx={{ color: 'var(--color-text)' }}
				rows={users || []}
				columns={columns}
				pageSizeOptions={[10]}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 10 },
					},
				}}
				checkboxSelection
			/>
		</div>
	);
}
