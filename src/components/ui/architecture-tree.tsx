import { File, Folder, Tree } from "@/components/magicui/file-tree";

export function ArchFileTree() {
	return (
		<div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden border bg-background md:shadow-xl rounded-[8px]">
			<Tree
				className="p-2 overflow-hidden rounded-md bg-background"
				initialSelectedId="7"
				initialExpandedItems={[
					"1",
					"4",
					"5"
				]}
				elements={ELEMENTS}
			>
				<Folder element="src" value="1">

					<Folder value="2" element="app">

					</Folder>

					<Folder value="3" element="components">
						
					</Folder>

					<Folder value="4" element="domain">
						<Folder value="5" element="models">
							<File value="6">
								<p>project.ts</p>
							</File>
							<File value="7">
								<p>user.ts</p>
							</File>
						</Folder>
					</Folder>

					<Folder value="8" element="lib">

					</Folder>

					<File value="9">
						<p>i18n.ts</p>
					</File>
					<File value="10">
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
				id: "3",
				isSelectable: false,
				name: "components",
			},
			{
				id: "4",
				isSelectable: true,
				name: "domain",
				children: [
					{
						id: "5",
						isSelectable: true,
						name: "models",
						children: [
							{
								id: "6",
								isSelectable: true,
								name: "project.ts",
							},
							{
								id: "7",
								isSelectable: true,
								name: "user.ts",
							},
						],
					},
				],
			},
			{
				id: "8",
				isSelectable: true,
				name: "lib",
			},
			{
				id: "9",
				isSelectable: true,
				name: "i18n.ts",
			},
			{
				id: "10",
				isSelectable: true,
				name: "middleware.ts",
			},
		],
	},
];
