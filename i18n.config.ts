@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src:
            url('~/assets/font/inter-v13-latin_latin-ext-300.woff2')
            format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src:
            url('~/assets/font/inter-v13-latin_latin-ext-regular.woff2')
            format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src:
            url('~/assets/font/inter-v13-latin_latin-ext-700.woff2')
            format('woff2');
    }


    @font-face {
        font-family: 'Monument';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src:
                url('~/assets/font/mnt_l.woff')
                format('woff');
    }

    @font-face {
        font-family: 'Monument';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src:
                url('~/assets/font/mnt_b.woff')
                format('woff');
    }

    html {
        @apply font-display text-mid text-md bg-dark select-none;
    }

    main {
        @apply overflow-hidden;
    }

    h1 {
        @apply font-bold text-white text-xxl;
    }

    h2 {
        @apply font-bold text-white text-xl;
    }

    h3 {
        @apply font-bold text-white text-lg mb-2;
    }

    h4 {
        @apply font-bold text-white text-md;
    }
}
