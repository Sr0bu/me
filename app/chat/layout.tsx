import { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
    return (
        <section className="chat-layout-wrapper">
            {/* Optional: eigener Header oder Sidebar nur für Chat */}
            <div className="chat-container">
                {children}
            </div>
        </section>
    );
}
