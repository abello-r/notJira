'use client';

// Auth:
import { signIn } from "next-auth/react";

// UI Components:
import GradualSpacing from "@/components/magicui/gradual-spacing";
import TopBar from '@/components/ui/top-bar';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start">
			<TopBar />
			<section className="w-full h-[90vh] flex flex-col items-center justify-start bg-[#F1F2F4]">
				<div className="w-[80%] flex flex-col items-center justify-center">
					<GradualSpacing
						className="pt-4 text-[#004bbf]"
						text="¡Gestiona tus proyectos de forma eficiente, usa NotJira!"
					/>
					<h1 className="pt-16 text-7xl font-extrabold mr-4">Excelentes resultados</h1>
					<p className="text-xl pt-10 font-medium">La única herramienta de gestión de proyectos que necesitas para planificar y monitorizar el trabajo de todos los equipos.</p>
					<button
						className="mt-10 bg-[#0052cc] text-white font-semibold py-2 px-4 rounded-[6px] hover:bg-[#004bbf]"
						onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
					>
						Comienza ahora
					</button>
				</div>
				<div className="w-[80%] h-full flex flex-row items-center justify-center gap-8">

					<div className="w-[20%] h-[80%] homeBox rounded-[6px]" id="leftHomeBox">
						<span className="w-full flex flex-col items-start justify-start">
							<h2 className="pb-4 text font-bold">Desarrollo de software</h2>
							<p className="text-neutral-600 font-light items-start justify-start text-left">Seguimiento de productos e incidencias.</p>
							<Image 
								src="/png/software.png" 
								alt="Development" 
								width={100} 
								height={100}
								quality={100}
								className="w-full h-full pt-8"
							 />
						</span>
					</div>
					<div className="w-[20%] h-[80%] homeBox rounded-[6px]" id="midLeftHomeBox">
						<span className="w-full flex flex-col items-start justify-start">
							<h2 className="pb-4 text font-bold">Marketing</h2>
							<p className="text-neutral-600 font-light items-start justify-start text-left">Planificar y lanzar campañas.</p>
							<Image 
								src="/png/marketing.png" 
								alt="Marketing" 
								width={100} 
								height={100} 
								quality={100}
								className="w-full h-full pt-8 pl-4 rotate-12"
							/>
						</span>
					</div>
					<div className="w-[20%] h-[80%] homeBox rounded-[6px]" id="midRightHomeBox">
						<span className="w-full flex flex-col items-start justify-start">
							<h2 className="pb-4 text font-bold">Diseño</h2>
							<p className="text-neutral-600 font-light items-start justify-start text-left">Crear flujos de trabajos creativos.</p>
							<Image
								src="/png/design.png"
								alt="Design"
								width={100}
								height={100}
								quality={100}
								className="w-full h-full pt-8 pl-4"
							/>
						</span>
					</div>
					<div className="w-[20%] h-[80%] homeBox rounded-[6px]" id="rightHomeBox">
						<span className="w-full flex flex-col items-start justify-start">
							<h2 className="pb-4 text font-bold">Operaciones</h2>
							<p className="text-neutral-600 font-light items-start justify-start text-left">Crear procesos personalizados.</p>
							<Image 
								src="/png/operations.png" 
								alt="Operations" 
								width={100} 
								height={100}
								quality={100}
								className="w-full h-full pt-8 pl-4 skew-x-12" 
							/>
						</span>
					</div>

				</div>
			</section>
		</main>
	);
}
