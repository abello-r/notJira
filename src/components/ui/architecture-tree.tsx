import { File, Folder, Tree } from "@/components/magicui/file-tree";

export function ArchFileTree() {
	return (
		<div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
			<Tree
				className="p-2 overflow-hidden rounded-md bg-background"
				initialSelectedId="7"
				initialExpandedItems={[
					"1",
					"10",
					"11"
				]}
				elements={ELEMENTS}
			>
				<Folder element="src" value="1">

					<Folder value="2" element="app">

					</Folder>

					<Folder value="9" element="components">
						
					</Folder>

					<Folder value="10" element="domain">
						<Folder value="11" element="models">
							<File value="12">
								<p>project.ts</p>
							</File>
							<File value="13">
								<p>user.ts</p>
							</File>
						</Folder>
					</Folder>

					<Folder value="14" element="lib">

					</Folder>

					<File value="18">
						<p>i18n.ts</p>
					</File>
					<File value="19">
						<p>middleware.ts</p>
					</File>
				</Folder>
			</Tree>
		</div>
	);
}

const ELEMENTS = [
	{
		id: "1",
		isSelectable: true,
		name: "src",
		children: [
			{
				id: "2",
				isSelectable: true,
				name: "app",
			},
			{
				id: "9",
				isSelectable: false,
				name: "components",
			},
			{
				id: "10",
				isSelectable: true,
				name: "domain",
				children: [
					{
						id: "11",
						isSelectable: true,
						name: "models",
						children: [
							{
								id: "12",
								isSelectable: true,
								name: "project.ts",
							},
							{
								id: "13",
								isSelectable: true,
								name: "user.ts",
							},
						],
					},
				],
			},
			{
				id: "14",
				isSelectable: true,
				name: "lib",
				children: [
					{
						id: "15",
						isSelectable: true,
						name: "fetcher.ts",
					},
					{
						id: "16",
						isSelectable: true,
						name: "mongodb.ts",
					},
					{
						id: "17",
						isSelectable: true,
						name: "utils.ts",
					},
				],
			},
			{
				id: "18",
				isSelectable: true,
				name: "i18n.ts",
			},
			{
				id: "19",
				isSelectable: true,
				name: "middleware.ts",
			},
		],
	},
];
