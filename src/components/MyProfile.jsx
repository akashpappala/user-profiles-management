import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";

const countries = [
  "India", "United States", "United Kingdom", "Australia", "Canada", "China", "France", "Germany"
];
const states = [
  "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "Maharashtra", "Delhi", "Uttar Pradesh", "Gujarat"
];
const experiences = ["Fresher", "1 Year", "2 Years", "3+ Years"];

export default function MyProfile() {
  const { id } = useParams();
  const { users, updateUser } = useUsers();
  const user = users.find(u => u.id === Number(id));
  const [tab, setTab] = useState("basic");
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user || {});

  if (!user) return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold">User not found</h2>
      <Link className="text-purple-600 underline" to="/">Back to Users</Link>
    </div>
  );

  // Resume upload logic
  const handleResumeUpload = e => {
    if (e.target.files && e.target.files.length > 0) {
      setForm({ ...form, resume: e.target.files[0].name });
    }
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateUser(user.id, form);
    setEditMode(false);
  };

  // Placeholders for sample
  const placeholders = {
    firstName: "e.g. John",
    lastName: "e.g. Doe",
    email: "e.g. mrnobody@mail.com",
    yearOfBirth: "YYYY",
    gender: "",
    phoneNumber: "e.g. 8332883854",
    alternatePhone: "e.g. 9876543210",
    address: "Enter here",
    pincode: "Enter here",
    domicileCountry: "Select an option",
    domicileState: "Select an option",
    school: "e.g. Lincoln College",
    degree: "e.g. Bachelors in Technology",
    course: "e.g. Computer science engineering",
    yearOfCompletion: "YYYY",
    grade: "Enter here",
    skills: "Enter here",
    projects: "Enter here",
    domain1: "e.g. Technology",
    subDomain1: "e.g. MERN Stack",
    experience1: "Select an option",
    domain2: "e.g. Technology",
    subDomain2: "e.g. MERN Stack",
    experience2: "Select an option",
    linkedin: "linkedin.com/in/mrbean"
  };

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-8 mt-8 max-w-6xl mx-auto">
      <div className="flex gap-6 items-center">
        <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center text-4xl text-purple-600 font-bold border border-gray-200">
          <span role="img" aria-label="profile">&#128100;</span>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{form.firstName || "First name"} {form.lastName || "Last name"}</h2>
          <div className="text-gray-600">{form.email || "Email"}</div>
          <div className="text-gray-600">{form.phoneNumber || "Phone number"}</div>
        </div>
      </div>
      <nav className="flex gap-4 mt-8 mb-6">
        <button className={`px-4 py-2 rounded font-medium ${tab === "basic" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`} onClick={() => setTab("basic")}>Basic Info</button>
        <button className={`px-4 py-2 rounded font-medium ${tab === "education" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`} onClick={() => setTab("education")}>Education & Skills</button>
        <button className={`px-4 py-2 rounded font-medium ${tab === "experience" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`} onClick={() => setTab("experience")}>Experience</button>
      </nav>

      {/* BASIC INFO */}
      {tab === "basic" && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Basic Details</h3>
            {editMode ? (
              <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={handleSave}>Save</button>
            ) : (
              <button className="bg-purple-100 px-3 py-1 rounded" onClick={() => setEditMode(true)}>Edit</button>
            )}
          </div>
          <form>
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">First name</label>
                <input name="firstName" className="w-full border rounded px-3 py-2" value={form.firstName || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.firstName} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Last name</label>
                <input name="lastName" className="w-full border rounded px-3 py-2" value={form.lastName || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.lastName} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Email ID</label>
                <input name="email" className="w-full border rounded px-3 py-2" value={form.email || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.email} />
              </div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Year of birth</label>
                <input name="yearOfBirth" type="number" className="w-full border rounded px-3 py-2" value={form.yearOfBirth || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.yearOfBirth} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Gender</label>
                <select name="gender" className="w-full border rounded px-3 py-2" value={form.gender || ""} onChange={handleChange} disabled={!editMode}>
                  <option value="">{placeholders.gender || "Select an option"}</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Phone number</label>
                <input name="phoneNumber" className="w-full border rounded px-3 py-2" value={form.phoneNumber || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.phoneNumber} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Alternate Phone no</label>
                <input name="alternatePhone" className="w-full border rounded px-3 py-2" value={form.alternatePhone || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.alternatePhone} />
              </div>
            </div>
            {/* Row 3: Address, Pincode, Domicile Country */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-1">
                <label className="block text-xs text-gray-500 mb-1">Address</label>
                <textarea name="address" className="w-full border rounded px-3 py-2 h-20" value={form.address || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.address}></textarea>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Pincode</label>
                <input name="pincode" className="w-full border rounded px-3 py-2" value={form.pincode || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.pincode} />
                <label className="block text-xs text-gray-500 mb-1 mt-2">Domicile Country</label>
                <select name="domicileCountry" className="w-full border rounded px-3 py-2" value={form.domicileCountry || ""} onChange={handleChange} disabled={!editMode}>
                  <option value="">{placeholders.domicileCountry}</option>
                  {countries.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Domicile State</label>
                <select name="domicileState" className="w-full border rounded px-3 py-2" value={form.domicileState || ""} onChange={handleChange} disabled={!editMode}>
                  <option value="">{placeholders.domicileState}</option>
                  {states.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* EDUCATION & SKILLS */}
      {tab === "education" && (
        <div>
          <div className="bg-white rounded-xl shadow p-4 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Education Details</h3>
              {editMode ? (
                <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={handleSave}>Save</button>
              ) : (
                <button className="bg-purple-100 px-3 py-1 rounded" onClick={() => setEditMode(true)}>Edit</button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">School / College</label>
                <input name="school" className="w-full border rounded px-3 py-2" value={form.school || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.school} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Highest degree or equivalent</label>
                <input name="degree" className="w-full border rounded px-3 py-2" value={form.degree || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.degree} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Course</label>
                <input name="course" className="w-full border rounded px-3 py-2" value={form.course || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.course} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Year of completion</label>
                <input name="yearOfCompletion" type="number" className="w-full border rounded px-3 py-2" value={form.yearOfCompletion || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.yearOfCompletion} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Grade</label>
                <input name="grade" className="w-full border rounded px-3 py-2" value={form.grade || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.grade} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Skills & Projects</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Skills</label>
                <textarea name="skills" className="w-full border rounded px-3 py-2 h-24" value={form.skills || ""} onChange={handleChange} disabled={!editMode} placeholder={placeholders.skills}></textarea>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Projects</label>
                <textarea name="projects" className="w-full border rounded px-3 py-2 h-24" value={form.projects || ""} onChange={handleChange} disabled={!editMode} placeholder={placeholders.projects}></textarea>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EXPERIENCE */}
      {tab === "experience" && (
        <div>
          {/* Work Experience Card 1 */}
          <div className="bg-white rounded-xl shadow p-4 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Work Experience</h3>
              {editMode ? (
                <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={handleSave}>Save</button>
              ) : (
                <button className="bg-purple-100 px-3 py-1 rounded" onClick={() => setEditMode(true)}>Edit</button>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-xs text-gray-500 mb-1">Domain</label>
              <input name="domain1" className="w-full border rounded px-3 py-2" value={form.domain1 || ""} onChange={handleChange} disabled={!editMode}
                placeholder={placeholders.domain1} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Sub-domain</label>
                <input name="subDomain1" className="w-full border rounded px-3 py-2" value={form.subDomain1 || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.subDomain1} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Experience</label>
                <select name="experience1" className="w-full border rounded px-3 py-2" value={form.experience1 || ""} onChange={handleChange} disabled={!editMode}>
                  <option value="">{placeholders.experience1}</option>
                  {experiences.map(e => <option key={e}>{e}</option>)}
                </select>
              </div>
            </div>
            {/* Repeat Domain Card (as in your Figma) */}
            <div className="mt-6 mb-2">
              <label className="block text-xs text-gray-500 mb-1">Domain</label>
              <input name="domain2" className="w-full border rounded px-3 py-2" value={form.domain2 || ""} onChange={handleChange} disabled={!editMode}
                placeholder={placeholders.domain2} />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Sub-domain</label>
                <input name="subDomain2" className="w-full border rounded px-3 py-2" value={form.subDomain2 || ""} onChange={handleChange} disabled={!editMode}
                  placeholder={placeholders.subDomain2} />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Experience</label>
                <select name="experience2" className="w-full border rounded px-3 py-2" value={form.experience2 || ""} onChange={handleChange} disabled={!editMode}>
                  <option value="">{placeholders.experience2}</option>
                  {experiences.map(e => <option key={e}>{e}</option>)}
                </select>
              </div>
            </div>
          </div>
          {/* LinkedIn & Resume */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">LinkedIn</h3>
              </div>
              <input name="linkedin" className="w-full border rounded px-3 py-2" value={form.linkedin || ""} onChange={handleChange} disabled={!editMode}
                placeholder={placeholders.linkedin} />
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Resume</h3>
              </div>
              {editMode ? (
                <input type="file" onChange={handleResumeUpload} className="w-full border rounded px-3 py-2" />
              ) : (
                form.resume ? (
                  <div className="flex items-center justify-between border rounded px-3 py-2 bg-gray-50">
                    <span>{form.resume}</span>
                    <button className="px-2 py-1 bg-purple-200 rounded text-sm font-medium">View</button>
                  </div>
                ) : <span className="text-gray-400">No resume uploaded</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
