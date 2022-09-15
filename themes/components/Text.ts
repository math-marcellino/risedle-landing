// All test styles/typography defined here

const H0 = () => ({
    fontFamily: 'InterDisplay',
    fontWeight: 'extrabold',
    fontSize: '148px',
    lineHeight: '136px',
    letterSpacing: '-0.02em',
});

const H1 = () => ({
    fontFamily: 'InterDisplay',
    fontWeight: 'extrabold',
    fontSize: '67px',
    lineHeight: '72px',
    letterSpacing: '-0.02em',
});

const H2 = () => ({
    fontFamily: 'InterDisplay',
    fontWeight: 'extrabold',
    fontSize: '50px',
    lineHeight: '56px',
    letterSpacing: '-0.02em',
});

const H3 = () => ({
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '40px',
    letterSpacing: '-0.02em',
});

const H4 = () => ({
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '32px',
    letterSpacing: '-0.02em',
});

const H5 = () => ({
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '24px',
    letterSpacing: '-0.02em',
});

const H6 = () => ({
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '16px',
});

const H7 = () => ({
    fontFamily: 'InterDisplay',
    fontWeight: 'semibold',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
});

const H8 = () => ({
    fontFamily: 'InterDisplay',
    fontWeight: 'semibold',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
});

const D1 = () => ({
    fontFamily: 'Space Mono',
    fontWeight: 'bold',
    fontSize: '67px',
    lineHeight: '72px',
    letterSpacing: '-0.02em',
});

const D2 = () => ({
    fontFamily: 'Space Mono',
    fontWeight: 'bold',
    fontSize: '50px',
    lineHeight: '56px',
    letterSpacing: '-0.02em',
});

const D3 = () => ({
    fontFamily: 'Space Mono',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '40px',
    letterSpacing: '-0.02em',
});

const D4 = () => ({
    fontFamily: 'Space Mono',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '32px',
    letterSpacing: '-0.02em',
});

const D5 = () => ({
    fontFamily: 'Space Mono',
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '24px',
    letterSpacing: '-0.02em',
});

const D6 = () => ({
    fontFamily: 'Space Mono',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
});

const D7 = () => ({
    fontFamily: 'Space Mono',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
});

const D8 = () => ({
    fontFamily: 'Space Mono',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
});

const PXL = () => ({
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '-0.03em',
});

const PL = () => ({
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '-0.03em',
});

const PM = () => ({
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.03em',
});

const PS = () => ({
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '-0.03em',
});

const PXS = () => ({
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '24px',
    letterSpacing: '-0.03em',
});

const Text = {
    variants: {
        'heading.h0': H0,
        'heading.h1': H1,
        'heading.h2': H2,
        'heading.h3': H3,
        'heading.h4': H4,
        'heading.h5': H5,
        'heading.h6': H6,
        'heading.h7': H7,
        'heading.h8': H8,
        'display.d1': D1,
        'display.d2': D2,
        'display.d3': D3,
        'display.d4': D4,
        'display.d5': D5,
        'display.d6': D6,
        'display.d7': D7,
        'display.d8': D8,
        'paragraph.xl': PXL,
        'paragraph.l': PL,
        'paragraph.m': PM,
        'paragraph.s': PS,
        'paragraph.xs': PXS,
    },
};

export default Text;
