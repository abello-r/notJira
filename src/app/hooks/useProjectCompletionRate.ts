import { useMemo } from 'react';

interface TeamStats {
	completed: number;
	ongoing: number;
}

interface ProjectStats {
	[team: string]: TeamStats;
}

/*
	Completation rate = Projects completed / Total projects
*/

const useProjectCompletionRate = (stats: ProjectStats) => {
	return useMemo(() => {
		const completionRates: Record<string, number> = {};

		for (const team in stats) {
			const { completed, ongoing } = stats[team];
			const total = completed + ongoing;
			completionRates[team] = total > 0 ? parseFloat(((completed / total) * 100).toFixed(2)) : 0;
		}

		return completionRates;
	}, [stats]);
};

export default useProjectCompletionRate;
