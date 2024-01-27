const React = require('react')
import { useReducer } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { BsBugFill, BsFillLightbulbFill } from 'react-icons/bs'
const emailEngine = require('../../components/common/email-handler.js')

export default function FeatureRequest() {
    const [proposedSubmission, proposedSubmissionDispatch] = useReducer((state, action) => {
        if (action.type === "update_message") return { ...state, message: action.value }
        if (action.type === "update_contact") return { ...state, contact: action.value }
        if (action.type === "submit") return { ...state, submitted: true }
        return state
    }, {message: "", contact: "", submitted: false })
    const submit = () => {
        proposedSubmissionDispatch({type: "submit"})
        emailEngine.submitFeatureIdea(proposedSubmission.message, proposedSubmission.contact)
    }
    const isSubmittable = () => {
        try {
            if (proposedSubmission.message) return true
            return false         
        } catch (error) {
            return false
        }
    }
    return (
        <Layout title="Request a Feature" description="Submit your incredible ideas">
        <div className="form-container">
            <h1 className="form-title">Request a feature</h1>
            <p>Use the form below to request a feature.  Provide your email if you'd like to receive progress updates.</p>
            {!proposedSubmission.submitted &&
            <div className="form-sections">
                <div className="form-section">
                    <div className="form-section-heading">What capability would you like to see in Tetheros?</div>
                    <div className="form-section-subheading">Any details you have are helpful.  Don't be afraid to dream big!</div>
                    <textarea placeholder="Describe the new feature, including what it will help you do" value={proposedSubmission.message} onChange={(e) => proposedSubmissionDispatch({type: "update_message", value: e.target.value  })}></textarea>
                </div>
                <div className="form-section">
                    <div className="form-section-heading">Provide an email to receive updates</div>
                    <div className="form-section-subheading">Optional.  We'll use this strictly to communicate about this feature.</div>
                    <input type="email" placeholder="Enter your email address" value={proposedSubmission.contact} onChange={(e) => proposedSubmissionDispatch({type: "update_contact", value: e.target.value })} />
                </div>
                {isSubmittable() && <button onClick={submit}><BsFillLightbulbFill/>Submit feature idea</button>}
                {!isSubmittable() && <button style={{cursor: "default", backgroundColor: "grey"}}><BsFillLightbulbFill/>Submit feature idea</button>}
            </div>
            }
            {proposedSubmission.submitted &&
            <div className="form-sections">
                <p>Thanks for your idea!</p>
                <div>
                    <div className="form-complete-button"><Link to='https://tetheros.com'>Return to Tetheros</Link></div>
                    <div className="form-complete-button"><Link to='/'>Browse more documentation</Link></div>
                </div>

            </div>
            }
        </div>
        </Layout>
    );
}