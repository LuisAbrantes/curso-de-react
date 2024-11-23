import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react({
            // Esta configuração resolve o erro 'React' must be in scope
            jsxRuntime: 'automatic',
            jsxImportSource: 'react'
        })
    ]
});
