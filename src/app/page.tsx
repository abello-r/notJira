'use client';

// Auth:
import { signIn } from "next-auth/react";

// UI Components:
import GradualSpacing from "@/components/magicui/gradual-spacing";
import TopBar from '@/components/ui/top-bar';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start">
			<TopBar />

			<section className="w-full h-full pb-8 sm:pb-0 sm:h-[90vh] flex flex-col items-center justify-start bg-[#F1F2F4]">

				<div className="w-[80%] flex flex-col items-center justify-center">
					<GradualSpacing
						className="pt-4 text-[#004bbf] hidden sm:block"
						text="¡Gestiona tus proyectos de forma eficiente, usa NotJira!"
					/>
					<h1 className="pt-16 text-7xl font-extrabold mr-4 text-center">Excelentes resultados</h1>
					<p className="text-xl pt-10 font-medium text-center">La única herramienta de gestión de proyectos que necesitas para planificar y monitorizar el trabajo de todos los equipos.</p>
					<button
						className="mt-10 bg-[#0052cc] text-white font-semibold py-2 px-4 rounded-[6px] hover:bg-[#004bbf]"
						onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
					>
						Comienza ahora
					</button>
				</div>

				<div className="w-[80%] mt-8 sm:mt-0 h-full flex flex-col sm:flex-row items-center justify-center gap-8"> { /* Boxes */ }

					<div className="w-[80%] sm:w-[20%] h-[80%] homeBox rounded-[6px]" id="leftHomeBox"> { /* Software Box */ }
						<span className="w-full flex flex-col items-start justify-start">
							<h2 className="pb-4 text font-bold">Desarrollo de software</h2>
							<p className="text-neutral-600 font-light items-start justify-start text-left">Seguimiento de productos e incidencias.</p>
							<img
								src="/png/software.png" 
								alt="Development"
								className="w-full h-full pt-8"
							 />
						</span>
					</div>

					<div className="w-[80%] sm:w-[20%] h-[80%] homeBox rounded-[6px]" id="midLeftHomeBox"> { /* Marketing Box */ }
						<span className="w-full flex flex-col items-start justify-start">
							<h2 className="pb-4 text font-bold">Marketing</h2>
							<p className="text-neutral-600 font-light items-start justify-start text-left">Planificar y lanzar campañas.</p>
							<img
								src="/png/marketing.png" 
								alt="Marketing" 
								className="w-full h-full pt-8 pl-4 rotate-12"
							/>
						</span>
					</div>

					<div className="w-[80%] sm:w-[20%] h-[80%] homeBox rounded-[6px]" id="midRightHomeBox"> { /* Design Box */ }
						<span className="w-full flex flex-col items-start justify-start">
							<h2 className="pb-4 text font-bold">Diseño</h2>
							<p className="text-neutral-600 font-light items-start justify-start text-left">Crear flujos de trabajos creativos.</p>
							<img
								src="/png/design.png"
								alt="Design"
								className="w-full h-full pt-8 pl-4"
							/>
						</span>
					</div>

					<div className="w-[80%] sm:w-[20%] h-[80%] homeBox rounded-[6px]" id="rightHomeBox"> { /* Operations Box */ }
						<span className="w-full flex flex-col items-start justify-start">
							<h2 className="pb-4 text font-bold">Operaciones</h2>
							<p className="text-neutral-600 font-light items-start justify-start text-left">Crear procesos personalizados.</p>
							<img
								src="/png/operations.png" 
								alt="Operations" 
								className="w-full h-full pt-8 pl-4 skew-x-12" 
							/>
						</span>
					</div>

				</div> { /* End of Boxes */ }

			</section>
		</main>
	);
}
