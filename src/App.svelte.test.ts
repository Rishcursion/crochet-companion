import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import App from './App.svelte';

describe('App.svelte', () => {
	test('should render h1', () => {
		render(App);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});
});
