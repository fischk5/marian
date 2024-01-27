import React from 'react'
import { useState } from 'react'

export default function ConvertkitForm() {
    const [proposedEmail, setProposedEmail] = useState(() => { return "" })
    return (
        <div className="convertkit-form">
            <div className="convertkit-form-heading">Subscribe to Product Updates</div>
            <div className="convertkit-form-subheading">Keep tabs on the evolution of Tetheros. Never sent more than once per week.</div>
            <script src="https://f.convertkit.com/ckjs/ck.5.js"/>
            <form action="https://app.convertkit.com/forms/6128599/subscriptions" method="post" data-sv-form="6128599" data-uid="b2cc6d538a" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;redirect&quot;,&quot;success_message&quot;:&quot;You'll now receive product news directly in your inbox!&quot;,&quot;redirect_url&quot;:&quot;https://docs.tetheros.com&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">
                <div data-style="clean">

                    <ul data-element="errors" data-group="alert"></ul>
                    <div data-element="fields" data-stacked="false" className="convertkit-form-container">
                        <div>
                            <input name="email_address" aria-label="Email Address" placeholder="Email Address" className="convertkit-form-input" required="" type="email" value={proposedEmail} onChange={(e) => setProposedEmail(e.target.value)}/>
                        </div>
                        {proposedEmail !== "" &&
                        <button data-element="submit" className="formkit-submit formkit-submit">
                            <div><div></div><div></div><div></div></div>
                            <span>Subscribe</span>
                        </button>
                        }
                        {proposedEmail === "" &&
                        <div className="convertkit-button-invalid" style={{backgroundColor: "grey"}}>
                            <span>Subscribe</span>
                        </div>
                        }
                    </div>

                </div>
            </form>
        </div>
    )
}
