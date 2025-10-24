export interface Testimonial {
    star: number;
    comment: string;
    imageUrl: string;
    name: string;
    position: string;
}

export const testimonialMap: Testimonial[] = [
    {
        star: 5,
        comment: 'As a trusted partner for Tally Accounting software and a leading integrator of URA EFRIS, we are committed to delivering top-notch software solutions that drive efficiency and growth.',
        imageUrl: 'testim-1.jpg',
        name: 'Sara Willson',
        position: 'Data analyst'
    },
    {
        star: 5,
        comment: 'The integration with URA EFRIS has streamlined our compliance processes, making financial reporting effortless and reliable.',
        imageUrl: 'testim-2.jpg',
        name: 'Saul Goodman',
        position: 'Ceo and founder'
    },
    {
        star: 5,
        comment: 'Their innovative solutions have significantly improved our HR workflows, enhancing team productivity and accuracy.',
        imageUrl: 'testim-3.jpg',
        name: 'John Larson',
        position: 'HR Manager'
    },
    {
        star: 5,
        comment: 'The seamless integration with URA EFRIS and Tally has transformed our financial operations, saving us time and boosting accuracy.',
        imageUrl: 'testim-4.png',
        name: 'Emma Thompson',
        position: 'Finance Manager'
    },
    {
        star: 5,
        comment: 'Their software solutions are user-friendly and reliable, making our accounting processes smoother and more efficient.',
        imageUrl: 'testim-5.png',
        name: 'Michael Chen',
        position: 'Operations Director'
    }
];