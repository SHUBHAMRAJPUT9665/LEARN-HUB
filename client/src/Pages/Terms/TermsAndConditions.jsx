import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';

const TermsAndConditions = () => {
    return (
       <HomeLayout>
         <div className="flex justify-center items-center min-h-screen p-4">
            <div className=" p-8 rounded-lg shadow-lg max-w-3xl">
                <h1 className="text-3xl font-bold mb-6 text-white">Terms & Conditions</h1>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">Introduction</h2>
                    <p className="text-white">Welcome to LEARN HUB! These terms and conditions outline the rules and regulations for the use of our website.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">Intellectual Property Rights</h2>
                    <p className="text-white">Unless otherwise stated, LEARN HUB and its licensors own the intellectual property rights for all material on our website. All intellectual property rights are reserved.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">Restrictions</h2>
                    <ul className="list-disc list-inside text-white">
                        <li>publishing any website material in any other media;</li>
                        <li>selling, sublicensing and otherwise commercializing any website material;</li>
                        <li>publicly performing or showing any website material;</li>
                        <li>using this website in any way that is or may be damaging to this website;</li>
                        <li>using this website in any way that impacts user access to this website;</li>
                        <li>using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity;</li>
                        <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website;</li>
                        <li>using this website to engage in any advertising or marketing.</li>
                    </ul>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">Disclaimer</h2>
                    <p className="text-white">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                    <ul className="list-disc list-inside text-white">
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-wite mb-2">Changes</h2>
                    <p className="text-white">We reserve the right to revise these terms and conditions at any time as we see fit, and by using this website you are expected to review these terms and conditions regularly.</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-2">Contact Us</h2>
                    <p className="text-white">If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:shubhamrajput9665@gmail.com" className="text-blue-500 underline">shubhamrajput9665@gmail.com</a>.</p>
                    <p className="text-white">Contact No<a href="mailto:shubhamrajput9665@gmail.com" className="text-blue-500 underline">9665768968</a>.</p>

                </section>
            </div>
        </div>
       </HomeLayout>
    );
};

export default TermsAndConditions;
