const size = {
	xs: "600px",
	sm: "900px",
	lg: "1200px",
};
const device = {
	xs: `(max-width: ${size.xs})`,
	sm: `(max-width: ${size.sm})`,
	lg: `(max-width: ${size.lg})`,
};

const breakpoint = { size, device };

export default breakpoint;
