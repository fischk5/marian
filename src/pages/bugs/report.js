const React = require('react')
import { useReducer } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { BsBugFill } from 'react-icons/bs'
const emailEngine = require('../../components/common/email-handler.js')

export default function BugReport() {
    const [proposedSubmission, proposedSubmissionDispatch] = useReducer((state, action) => {
        if (action.type === "update_message") return { ...state, message: action.value }
        if (action.type === "update_contact") return { ...state, contact: action.value }
        if (action.type === "submit") return { ...state, submitted: true }
        return state
    }, {message: "", contact: "", submitted: false })
    const submit = () => {
        proposedSubmissionDispatch({type: "submit"})
        emailEngine.submitBugReport(proposedSubmission.message, proposedSubmission.contact)
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
        <Layout title="Report a Bug" description="Report something suspicious in Tetheros">
        <div className="form-container">
            <h1 className="form-title">Report a bug</h1>
            <p>Use the form below to report an issue.  Provide your email if you'd like to receive progress updates.</p>
            {!proposedSubmission.submitted &&
            <div className="form-sections">
                <div className="form-section">
                    <div className="form-section-heading">Describe the bug</div>
                    <div className="form-section-subheading">Anything you can remember will help us fix it</div>
                    <textarea placeholder="Tell us a little about what happened while you were using Tetheros" value={proposedSubmission.message} onChange={(e) => proposedSubmissionDispatch({type: "update_message", value: e.target.value  })}></textarea>
                </div>
                <div className="form-section">
                    <div className="form-section-heading">Provide an email to receive updates</div>
                    <div className="form-section-subheading">Optional.  We'll use this strictly to communicate about this issue.</div>
                    <input type="email" placeholder="Enter your email address" value={proposedSubmission.contact} onChange={(e) => proposedSubmissionDispatch({type: "update_contact", value: e.target.value })} />
                </div>
                {isSubmittable() && <button onClick={submit}><BsBugFill/>Submit new bug</button>}
                {!isSubmittable() && <button style={{cursor: "default", backgroundColor: "grey"}}><BsBugFill/>Submit new bug</button>}
            </div>
            }
            {proposedSubmission.submitted &&
            <div className="form-sections">
                <p>Thanks for your submission!</p>
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