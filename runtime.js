//Provides: pcre
var pcre = globalThis.pcre_wasm;

const NULL = 0;

const PCRE_CONFIG_UTF8                    = 0
const PCRE_CONFIG_NEWLINE                 = 1
const PCRE_CONFIG_LINK_SIZE               = 2
const PCRE_CONFIG_POSIX_MALLOC_THRESHOLD  = 3
const PCRE_CONFIG_MATCH_LIMIT             = 4
const PCRE_CONFIG_STACKRECURSE            = 5
const PCRE_CONFIG_UNICODE_PROPERTIES      = 6
const PCRE_CONFIG_MATCH_LIMIT_RECURSION   = 7
const PCRE_CONFIG_BSR                     = 8
const PCRE_CONFIG_JIT                     = 9
const PCRE_CONFIG_UTF16                   = 10
const PCRE_CONFIG_JITTARGET               = 11
const PCRE_CONFIG_UTF32                   = 12
const PCRE_CONFIG_PARENS_LIMIT            = 13

const PCRE_STUDY_JIT_COMPILE                = 0x0001
const PCRE_STUDY_JIT_PARTIAL_SOFT_COMPILE   = 0x0002
const PCRE_STUDY_JIT_PARTIAL_HARD_COMPILE   = 0x0004
const PCRE_STUDY_EXTRA_NEEDED               = 0x0008

const PCRE_EXTRA_STUDY_DATA            = 0x0001
const PCRE_EXTRA_MATCH_LIMIT           = 0x0002
const PCRE_EXTRA_CALLOUT_DATA          = 0x0004
const PCRE_EXTRA_TABLES                = 0x0008
const PCRE_EXTRA_MATCH_LIMIT_RECURSION = 0x0010
const PCRE_EXTRA_MARK                  = 0x0020
const PCRE_EXTRA_EXECUTABLE_JIT        = 0x0040

/*
#define PCRE_INFO_OPTIONS            0*/
const PCRE_INFO_SIZE               = 1
const PCRE_INFO_CAPTURECOUNT       = 2
/*#define PCRE_INFO_BACKREFMAX         3
#define PCRE_INFO_FIRSTBYTE          4
#define PCRE_INFO_FIRSTCHAR          4  
#define PCRE_INFO_FIRSTTABLE         5
#define PCRE_INFO_LASTLITERAL        6
#define PCRE_INFO_NAMEENTRYSIZE      7
#define PCRE_INFO_NAMECOUNT          8
#define PCRE_INFO_NAMETABLE          9
#define PCRE_INFO_STUDYSIZE         10
#define PCRE_INFO_DEFAULT_TABLES    11
#define PCRE_INFO_OKPARTIAL         12
#define PCRE_INFO_JCHANGED          13
#define PCRE_INFO_HASCRORLF         14
#define PCRE_INFO_MINLENGTH         15
#define PCRE_INFO_JIT               16
#define PCRE_INFO_JITSIZE           17
#define PCRE_INFO_MAXLOOKBEHIND     18
#define PCRE_INFO_FIRSTCHARACTER    19
#define PCRE_INFO_FIRSTCHARACTERFLAGS 20
#define PCRE_INFO_REQUIREDCHAR      21
#define PCRE_INFO_REQUIREDCHARFLAGS 22
#define PCRE_INFO_MATCHLIMIT        23
#define PCRE_INFO_RECURSIONLIMIT    24
#define PCRE_INFO_MATCH_EMPTY       25
*/
const PCRE_ERROR_NOMATCH          = (-1)
// #define PCRE_ERROR_NULL             (-2)
// #define PCRE_ERROR_BADOPTION        (-3)
// #define PCRE_ERROR_BADMAGIC         (-4)
// #define PCRE_ERROR_UNKNOWN_OPCODE   (-5)
// #define PCRE_ERROR_UNKNOWN_NODE     (-5)  /* For backward compatibility */
// #define PCRE_ERROR_NOMEMORY         (-6)
// #define PCRE_ERROR_NOSUBSTRING      (-7)
// #define PCRE_ERROR_MATCHLIMIT       (-8)
// #define PCRE_ERROR_CALLOUT          (-9)  /* Never used by PCRE itself */
// #define PCRE_ERROR_BADUTF8         (-10)  /* Same for 8/16/32 */
// #define PCRE_ERROR_BADUTF16        (-10)  /* Same for 8/16/32 */
// #define PCRE_ERROR_BADUTF32        (-10)  /* Same for 8/16/32 */
// #define PCRE_ERROR_BADUTF8_OFFSET  (-11)  /* Same for 8/16 */
// #define PCRE_ERROR_BADUTF16_OFFSET (-11)  /* Same for 8/16 */
// #define PCRE_ERROR_PARTIAL         (-12)
// #define PCRE_ERROR_BADPARTIAL      (-13)
// #define PCRE_ERROR_INTERNAL        (-14)
// #define PCRE_ERROR_BADCOUNT        (-15)
// #define PCRE_ERROR_DFA_UITEM       (-16)
// #define PCRE_ERROR_DFA_UCOND       (-17)
// #define PCRE_ERROR_DFA_UMLIMIT     (-18)
// #define PCRE_ERROR_DFA_WSSIZE      (-19)
// #define PCRE_ERROR_DFA_RECURSE     (-20)
// #define PCRE_ERROR_RECURSIONLIMIT  (-21)
// #define PCRE_ERROR_NULLWSLIMIT     (-22)  /* No longer actually used */
// #define PCRE_ERROR_BADNEWLINE      (-23)
// #define PCRE_ERROR_BADOFFSET       (-24)
// #define PCRE_ERROR_SHORTUTF8       (-25)
// #define PCRE_ERROR_SHORTUTF16      (-25)  /* Same for 8/16 */
// #define PCRE_ERROR_RECURSELOOP     (-26)
// #define PCRE_ERROR_JIT_STACKLIMIT  (-27)
// #define PCRE_ERROR_BADMODE         (-28)
// #define PCRE_ERROR_BADENDIANNESS   (-29)
// #define PCRE_ERROR_DFA_BADRESTART  (-30)
// #define PCRE_ERROR_JIT_BADOPTION   (-31)
// #define PCRE_ERROR_BADLENGTH       (-32)
// #define PCRE_ERROR_UNSET           (-33)

const STRUCT_PCRE_EXTRA = {
	flags: 0,
	study_data_ptr: 4,
	match_limit: 8,
	callout_data_ptr: 12,
	tables_ptr: 16,
	match_limit_recursion: 20,
	mark_ptr: 24,
	executable_jit_ptr: 28
};

const STRUCT_PCRE = {
	magic_number: 0,
	size: 4,
	options: 8,
	flags: 12,
	limit_match: 16,
	limit_recursion: 20,
	first_char: 24,
	req_char: 26,
	max_lookbehind: 28,
	top_bracket: 30,
	top_backref: 32,
	name_table_offset: 34,
	name_entry_size: 36,
	name_count: 38,
	ref_count: 40,
	dummy1: 42,
	dummy2: 44,
	dummy3: 48,
	tables_ptr: 50, // TODO: is this really 4 bytes?
	nullpad_ptr: 54,
}

function struct_sizeof(struct) {
	return Math.max(...Object.values(struct))+4
}

function print_struct(wasm, ptr, type) {
	console.log(Object.keys(type).map((key) => `${key}: ${wasm.getValue(ptr + type[key], 'i32')}`).join(", "))
}

//Provides: pcre_ocaml_init
function pcre_ocaml_init() {
	
}

//Provides: pcre_version_stub const
//Requires: pcre
function pcre_version_stub() {
	const ptr = pcre._pcre_version()
	const value = pcre.AsciiToString()
	pcre._free(ptr)
	return value
}

//Provides: pcre_config_get_int
//Requires: pcre
function pcre_config_get_int(what) {
	const ptr = pcre._malloc(4)
	pcre._pcre_config(what, ptr)
	const value = pcre.HEAP8[ptr]
	pcre._free(ptr)
	return value
}

//Provides: pcre_config_get_long
//Requires: pcre
function pcre_config_get_long(what) {
	const ptr = pcre._malloc(4)
	pcre._pcre_config(what, ptr)
	const value = pcre.HEAP16[ptr]
	pcre._free(ptr)
	return value
}

//Provides: pcre_config_utf8_stub const
//Requires: pcre_config_get_int
function pcre_config_utf8_stub() {
	return pcre_config_get_int(PCRE_CONFIG_UTF8)
}

//Provides: pcre_config_newline_stub
//Requires: pcre_config_get_int
function pcre_config_newline_stub() {
	return pcre_config_get_int(PCRE_CONFIG_NEWLINE)
}

//Provides: pcre_config_link_size_stub_bc
//Requires: pcre_config_get_int
function pcre_config_link_size_stub_bc() {
	return pcre_config_get_int(PCRE_CONFIG_LINK_SIZE)
}

//Provides: pcre_config_match_limit_stub_bc
//Requires: pcre_config_get_long
function pcre_config_match_limit_stub_bc() {
	return pcre_config_get_long(PCRE_CONFIG_MATCH_LIMIT)
}

//Provides: pcre_config_match_limit_recursion_stub_bc
//Requires: pcre_config_get_long
function pcre_config_match_limit_recursion_stub_bc() {
	return pcre_config_get_long(PCRE_CONFIG_MATCH_LIMIT_RECURSION);
}

//Provides: pcre_config_stackrecurse_stub
//Requires: pcre_config_get_int
function pcre_config_stackrecurse_stub() {
	return pcre_config_get_int(PCRE_CONFIG_STACKRECURSE)
}

//Provides: pcre_compile_stub_bc
//Requires: pcre
function pcre_compile_stub_bc(v_opt, v_tables, v_pat) {
  //size_t regexp_size, ocaml_regexp_size = sizeof(struct pcre_ocaml_regexp);
  var regexp_info_ptr = pcre._malloc(16);
  var error_ptr = pcre._malloc(4);
  var error_ptr_ptr = pcre._malloc(4);
  pcre.setValue(error_ptr_ptr, error_ptr, 'i32')
  var error_ofs_ptr = pcre._malloc(4);  /* offset in the pattern at which error occurred */

  /* If v_tables = [None], then pointer to tables is NULL, otherwise
     set it to the appropriate value */
  //chartables tables = Is_none(v_tables) ? NULL : get_tables(Field(v_tables, 0));
  if (v_tables != 0) {
	throw new Error("need to do something with v_tables");
  }

  const pattern_ptr = pcre._malloc(v_pat.length*4);  // TODO
  if (v_opt & 0x800) {  // TODO: const
	pcre.stringToUTF8(v_pat, pattern_ptr);
  } else {
	pcre.stringToAscii(v_pat, pattern_ptr);
  }
  
  /* Compiles the pattern */
  const regexp_ptr = pcre._pcre_compile(pattern_ptr, v_opt, error_ptr_ptr, error_ofs_ptr, 0);

  /* Raises appropriate exception with [BadPattern] if the pattern
     could not be compiled */
	if (regexp_ptr == NULL) {
		const errorString = pcre.AsciiToString(pcre.getValue(error_ptr_ptr, 'i32'))
		throw new Error(errorString + " at offset " + pcre.HEAP8[error_ofs_ptr])
	}
  

  /* It's unknown at this point whether the user will study the pattern
     later (probably), or if JIT compilation is going to be used, but we
     have to decide on a size.  Tests with some simple patterns indicate a
     roughly 50% increase in size when studying without JIT.  A factor of
     two times hence seems like a reasonable bound to use here. */
  const fullinfo_result = pcre._pcre_fullinfo(regexp_ptr, 0, PCRE_INFO_SIZE, regexp_info_ptr);


  return {
	regexp_ptr: regexp_ptr,
	extra_ptr: NULL,
	studied: 0,
  }
}

//Provides: pcre_study_stub
//Requires: pcre
function pcre_study_stub(v_rex, v_jit_compile) {
	if (!v_rex.studied) {
		const flags = v_jit_compile ? PCRE_STUDY_JIT_COMPILE : 0
		const error_ptr = pcre._malloc(1024)
		const extra_ptr = pcre._pcre_study(v_rex.regexp_ptr, flags, error_ptr)
		if (pcre.HEAP8[error_ptr] != NULL) {
			throw new Error(`invalid argument: ${pcre.AsciiToString(pcre.HEAP8[error_ptr])}`)
		}
		v_rex.extra_ptr = extra_ptr
		v_rex.studied = 1
	}
	return v_rex
}

//Provides: pcre_set_imp_match_limit_stub_bc
//Requires: pcre
function pcre_set_imp_match_limit_stub_bc(v_rex, v_lim) {
	if (v_rex.extra_ptr == NULL) {
		v_rex.extra_ptr = pcre._malloc(struct_sizeof(STRUCT_PCRE_EXTRA))
		pcre.setValue(v_rex.extra_ptr + STRUCT_PCRE_EXTRA.flags, PCRE_EXTRA_MATCH_LIMIT, 'i32')
	} else {
		pcre.setValue(v_rex.extra_ptr + STRUCT_PCRE_EXTRA.flags, pcre.getValue(v_rex.extra_ptr + STRUCT_PCRE_EXTRA.flags, 'i32') | PCRE_EXTRA_MATCH_LIMIT, 'i32')
	}
	pcre.setValue(v_rex.extra_ptr + STRUCT_PCRE_EXTRA.match_limit, v_lim, 'i32')
	return v_rex
}

//Provides: pcre_set_imp_match_limit_recursion_stub_bc
//Requires: pcre
function pcre_set_imp_match_limit_recursion_stub_bc(v_rex, v_lim) {
	if (v_rex.extra_ptr == NULL) {
		v_rex.extra_ptr = pcre._malloc(struct_sizeof(STRUCT_PCRE_EXTRA))
		pcre.setValue(v_rex.extra_ptr + STRUCT_PCRE_EXTRA.flags, PCRE_EXTRA_MATCH_LIMIT_RECURSION, 'i32')
	} else {
		pcre.setValue(v_rex.extra_ptr + STRUCT_PCRE_EXTRA.flags, pcre.getValue(v_rex.extra_ptr + STRUCT_PCRE_EXTRA.flags, 'i32') | PCRE_EXTRA_MATCH_LIMIT_RECURSION, 'i32')
	}
	pcre.setValue(v_rex.extra_ptr + STRUCT_PCRE_EXTRA.match_limit_recursion, v_lim, 'i32')
	return v_rex
}

//Provides: pcre_capturecount_stub_bc
//Requires: pcre
function pcre_capturecount_stub_bc(v_rex) {
	const options_ptr = pcre._malloc(4)
	const ret = pcre._pcre_fullinfo(v_rex.regexp_ptr, v_rex.extra_ptr, PCRE_INFO_CAPTURECOUNT, options_ptr)
	if (ret != 0) {
		throw new Error("shit")  // TODO
	}
	return pcre.getValue(options_ptr, 'i32')
}

//Provides: handle_exec_error
//Requires: caml_raise_not_found
function handle_exec_error(loc, ret) {
	switch (ret) {
		case PCRE_ERROR_NOMATCH:
			caml_raise_not_found()
			return;
		default:
			throw new Error("dont know what to do with error: " + ret)
	}
}

//Provides: pcre_exec_stub_bc
//Requires: pcre, handle_exec_error
function pcre_exec_stub_bc(v_opt, v_rex, v_pos, v_subj_start, v_subj, v_ovec, v_maybe_cof, v_workspace) {
	var ret;
	const is_dfa = !!v_workspace;
	var pos = v_pos
	var len = v_subj.length
	var subj_start = v_subj_start

	const v_subj_ptr = pcre._malloc(v_subj.length)
	pcre.stringToAscii(v_subj, v_subj_ptr)

	var ovec_len = v_ovec.length

	if (pos > len || pos < subj_start) {
		throw new Error("Pcre.pcre_exec_stub: illegal position")
	}

	if (subj_start > len || subj_start < 0) {
		throw new Error("Pcre.pcre_exec_stub: illegal subject start")
	}

	pos -= subj_start;
	len -= subj_start;

	const ocaml_subj_ptr = v_subj_ptr + subj_start;
	const opt = v_opt;

	if (!v_maybe_cof) {
		const ovec_ptr = pcre._malloc(ovec_len * 4)
		if (is_dfa) {
			ret = pcre._pcre_dfa_exec()
		} else {
			ret = pcre._pcre_exec(v_rex.regexp_ptr, v_rex.extra_ptr, ocaml_subj_ptr, len, pos, opt, ovec_ptr, ovec_len)
		}
		if (ret < 0) {
			handle_exec_error("pcre_exec_stub", ret)
		} else {
			for (var i=0; i<ovec_len; i++) {
				v_ovec[i] = pcre.getValue(ovec_ptr + (i*4))
			}
		}
	} else {
		throw new Error("callout functions unimplemented")
	}
}